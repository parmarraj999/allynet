// src/functions/updateUserDetail.js
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const updateUserProfile = async (formData) => {
  const userId = window.localStorage.getItem("userId");
  if (!userId) {
    console.error("No user id found");
    return false;
  }

  try {
    let profileUrl = formData.profileImage || "";
    let bannerUrl = formData.bannerImage || "";

    // upload profile if new file selected
    if (formData.profileFile instanceof File) {
      const profileRef = ref(storage, `users/${userId}/profile_${Date.now()}.jpg`);
      await uploadBytes(profileRef, formData.profileFile);
      profileUrl = await getDownloadURL(profileRef);
    }

    // upload banner if new file selected
    if (formData.bannerFile instanceof File) {
      const bannerRef = ref(storage, `users/${userId}/banner_${Date.now()}.jpg`);
      await uploadBytes(bannerRef, formData.bannerFile);
      bannerUrl = await getDownloadURL(bannerRef);
    }

    // update firestore doc
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      name: formData.name || "",
      tagline: formData.tagline || "",
      institute: formData.institute || "",
      about: formData.about || "",
      skills: formData.skills || [],
      profileImage: profileUrl,
      bannerImage: bannerUrl,
    });

    console.log("✅ Profile updated");
    return true;
  } catch (err) {
    console.error("Error updating profile: ", err);
    return false;
  }
};
