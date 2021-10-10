module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['localhost','https://res.cloudinary.com/dsf7hsxxm/image/upload/'],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dsf7hsxxm/image/upload/",
  },
  scripts: {
    domains:["www.form.jotform.com"],
  },
}