export const Image = ({ title, link, smallImage }) => {
  return (
    <div className='projects-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={link}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}