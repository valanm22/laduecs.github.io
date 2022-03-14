export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.github : '/'}>
                      <i className='fa fa-github'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; ∞ Billiam Wender and the <a href="https://github.com/LadueCS/laduecs.github.io/graphs/contributors">Ladue community</a>
          </p>
        </div>
      </div>
    </div>
  )
}
