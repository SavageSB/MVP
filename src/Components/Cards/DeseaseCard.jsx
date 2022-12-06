import 'w3-css/w3.css';

const DiseaseCard = (props) => {
  console.log(props)
  return (
    <div className='w3-card-4 w3-third'>
        <header className='w3-container w3-blue-gray'>
            <h3>{props.disease}</h3>
        </header>
        <div className='w3-container'>
          <p className="w3-center"><b>Desciption</b>: {props.description}</p>
        </div>
    </div>
  )
}

export default DiseaseCard