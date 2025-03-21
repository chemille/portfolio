

function ProjectCard({ image, title, links }) {
  return (
    <div className="card portfolioContent" style={{ width: '100%' }}>
      <img className="card-img-top" src={image} alt="Card image" style={{ width: '100%' }} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="text-center">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="btn btn-success" style={{ margin: '0 5px' }}>
              {link.text}
            </a> 
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
