import Person from './Person'

const Numbers = ({personsToShow}) => {
  return (
    <div>
        {personsToShow.map(person => <Person key={person.id} person={person} />)}
    </div>
    )
}

export default Numbers