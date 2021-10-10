module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['localhost'],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dsf7hsxxm/image/upload/v1633901610/mhl/",
  },
  scripts: {
    domains:["www.form.jotform.com"],
  },
}