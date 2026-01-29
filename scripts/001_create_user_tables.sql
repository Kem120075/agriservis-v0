-- Create user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('farmer', 'buyer', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create farmers table
CREATE TABLE IF NOT EXISTS public.farmers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  province TEXT NOT NULL,
  district TEXT NOT NULL,
  village TEXT NOT NULL,
  farming_category TEXT NOT NULL CHECK (farming_category IN ('crops', 'livestock', 'fisheries', 'mixed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create buyers table
CREATE TABLE IF NOT EXISTS public.buyers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  province TEXT NOT NULL,
  district TEXT NOT NULL,
  business_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable RLS on all tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farmers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buyers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles
CREATE POLICY "users_can_view_own_role" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "users_can_insert_own_role" ON public.user_roles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for farmers
CREATE POLICY "farmers_select_own" ON public.farmers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "farmers_insert_own" ON public.farmers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "farmers_update_own" ON public.farmers
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "farmers_delete_own" ON public.farmers
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for buyers
CREATE POLICY "buyers_select_own" ON public.buyers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "buyers_insert_own" ON public.buyers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "buyers_update_own" ON public.buyers
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "buyers_delete_own" ON public.buyers
  FOR DELETE USING (auth.uid() = user_id);

-- Create trigger function to auto-insert user role and profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role TEXT;
  user_full_name TEXT;
  user_email TEXT;
  user_phone TEXT;
  user_province TEXT;
  user_district TEXT;
  user_village TEXT;
  user_farming_category TEXT;
BEGIN
  -- Extract role from user metadata
  user_role := COALESCE(NEW.raw_user_meta_data ->> 'role', 'farmer');
  
  -- Insert into user_roles
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, user_role)
  ON CONFLICT (user_id) DO NOTHING;

  -- If farmer, insert into farmers table
  IF user_role = 'farmer' THEN
    user_full_name := COALESCE(NEW.raw_user_meta_data ->> 'full_name', '');
    user_email := COALESCE(NEW.email, '');
    user_phone := COALESCE(NEW.raw_user_meta_data ->> 'phone', '');
    user_province := COALESCE(NEW.raw_user_meta_data ->> 'province', '');
    user_district := COALESCE(NEW.raw_user_meta_data ->> 'district', '');
    user_village := COALESCE(NEW.raw_user_meta_data ->> 'village', '');
    user_farming_category := COALESCE(NEW.raw_user_meta_data ->> 'farming_category', 'crops');

    INSERT INTO public.farmers (user_id, full_name, email, phone, province, district, village, farming_category)
    VALUES (NEW.id, user_full_name, user_email, user_phone, user_province, user_district, user_village, user_farming_category)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;

  -- If buyer, insert into buyers table
  IF user_role = 'buyer' THEN
    user_full_name := COALESCE(NEW.raw_user_meta_data ->> 'full_name', '');
    user_email := COALESCE(NEW.email, '');
    user_phone := COALESCE(NEW.raw_user_meta_data ->> 'phone', '');
    user_province := COALESCE(NEW.raw_user_meta_data ->> 'province', '');
    user_district := COALESCE(NEW.raw_user_meta_data ->> 'district', '');

    INSERT INTO public.buyers (user_id, full_name, email, phone, province, district)
    VALUES (NEW.id, user_full_name, user_email, user_phone, user_province, user_district)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Create trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
