const SocialMedias = () => {

  const SOCIAL_MEDIAS = [
    { label: 'Twitter', icon: 'fab fa-twitter', url: 'https://www.twitter.com/nazifcand' },
    { label: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/nazifcandurgut' },
    { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nazifcand' },
    { label: 'GitLab', icon: 'fab fa-gitlab', url: 'https://gitlab.com/nazifcand' },
    { label: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/nazif-can-durgut-261804181/' },
    { label: 'Youtube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCwBUHoMilKCiwg_P4IOVcKA' },
    { label: 'Mail', icon: 'fal fa-envelope', url: 'mailto:nazifcandurgutt@gmail.com' },
  ]

  return <div id="socials">

    {SOCIAL_MEDIAS.map(item => {
      return <a
        key={item.url}
        href={item.url}
        title={item.label}
        target='_blank'
        className="social" rel="noreferrer"
      >
        <i className={item.icon}></i>
      </a>
    })}

  </div>
}

export default SocialMedias;