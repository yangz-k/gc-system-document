const mode = import.meta.env.MODE;

const defaultDir = mode === "production" ? "/static/doc/backEnd/" : "/backEnd/";
export const data = [
  {
    img: ``,
    title: "docker最佳实践",
    des: "docker最佳实践",
    url: `${defaultDir}docker.pdf`,
    type: "pdf",
  },
];
