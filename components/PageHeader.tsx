const PageHeader = ({ title, children }) => {
  return (
    <div id="page-header">
      <div id="page-title">
        <h1>{title}</h1>
      </div>
      <div id="page-actions">{children}</div>
    </div>
  );
};

export default PageHeader;
