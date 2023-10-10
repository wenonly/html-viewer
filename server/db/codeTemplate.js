const currentScript = document.currentScript;

const html = ```<<html>>```;
const css = ```<<css>>```;
const js = ```<<js>>```;

const exportData = {
  html,
  css,
  js,
};

const getExportData = function () {
  return exportData;
};

export default getExportData;
