import spinner from '../../images/Spinner.gif'

function Preloader() {
  return (
    <section className="preloader">
      <img src={spinner} alt="spinner" className='spinner' />
    </section>
  )
}

export default Preloader;