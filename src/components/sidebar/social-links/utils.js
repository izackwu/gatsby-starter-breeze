import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaRss,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  ImShare2,
  IoMdMail,
  RiDoubanFill,
  RiInstagramFill,
} from "react-icons/all"

import React from "react"

export const getIcon = sitename => {
  switch (sitename) {
    case "douban":
      return <RiDoubanFill />
    case "email":
      return <IoMdMail />
    case "facebook":
      return <FaFacebookF />
    case "github":
      return <FaGithub />
    case "instagram":
      return <RiInstagramFill />
    case "linkedin":
      return <FaLinkedinIn />
    case "rss":
      return <FaRss />
    case "telegram":
      return <FaTelegramPlane />
    case "twitter":
      return <FaTwitter />
    case "youtube":
      return <FaYoutube />
    default:
      return <ImShare2 />
  }
}

export const getLink = (sitename, username) => {
  switch (sitename) {
    case "douban":
      return `https://www.douban.com/people/${username}`
    case "email":
      return `mailto:${username}`
    case "facebook":
      return `https://www.facebook.com/${username}`
    case "github":
      return `https://github.com/${username}`
    case "instagram":
      return `https://www.instagram.com/${username}`
    case "linkedin":
      return `https://www.linkedin.com/in/${username}`
    case "rss":
      return username
    case "telegram":
      return `https://t.me/${username}`
    case "twitter":
      return `https://twitter.com/${username}`
    case "youtube":
      return `https://www.youtube.com/channel/${username}`
    default:
      return username
  }
}
