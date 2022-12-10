import React, { useState } from "react";

import { supabase } from "../database/Database";

const Account = ({ session }: { session: any }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [website, setWebsite] = useState(null);
  React.useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      let { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar")
        .eq("id", user.id)
        .single();
      if (error && status !== 400) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatar(data.avatar);
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async ({
    username,
    website,
    avatar,
  }: {
    username: null;
    website: null;
    avatar: null;
  }) => {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id,
        username,
        website,
        avatar,
        updated_at: new Date(),
      };
      let { error } = await supabase
        .from("profiles")
        .upsert(updates, { count: "estimated", ignoreDuplicates: true });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        {/* 
        <PersonalAvatar 
        url={avatar}
        onUpload={(url => 
            setAvatar(url)
            updateProfile({username, website, avatar: url})
            ) }
        />
        */}
      </div>
    </>
  );
};
export default Account;

const PersonAvatar = ({ url, onUpload }: { url: null; onUpload(): void }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  React.useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);
};

const downloadImage = async (path: string) => {
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .download(path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    setAvatarUrl(url);
  } catch (err) {}
};

const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("You must");
    }
    const file = event.target.files(0);
    const fileExtension = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExtension}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);
    if (uploadError) {
      throw uploadError;
    }

    onUpload(filePath);
  } catch (err) {}
};

const App = () => {
  const [session, setSession] = useState(null);
  React.useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};
