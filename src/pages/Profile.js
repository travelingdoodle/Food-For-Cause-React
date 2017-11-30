import React from "react";
import Navbar from "../components/navbar/Navbar";
import UserInfo from "../components/userinfo/UserInfo";
import Footer from "../components/footer/Footer";

const Profile = () => (
  <div className="container">
    <Navbar />
    <UserInfo />
    <Footer />
  </div>
);

export default Profile;
