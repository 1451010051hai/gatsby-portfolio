module.exports = {
  SiteTitle: 'Vo Thanh Hai',
  Sitelogo: '#',
  SiteLogoText: 'Hai t',
  SiteAuthor: 'Vo Thanh Hai',
  SiteDescription: 'Mobile Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/AbdaliDahir',
    github: 'https://github.com/AbdaliDahir',
    linkedin: 'https://www.linkedin.com/in/v%C3%B5-th%C3%A0nh-h%E1%BA%A3i-617144193/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'vothanhhai1996@gmail.com',
    phone: '0365887549',
  },
  SiteCopyright: '2020',
};
