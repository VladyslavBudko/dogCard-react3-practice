import { DogSection } from './Dog.styled';

export const Dog = ({ dog: { url, breeds } }) => {
  const {
    name,
    bred_for,
    breed_group,
    temperament,
    height,
    weight,
    life_span,
  } = breeds[0];

  return (
    <DogSection style={{ display: 'flex', gap: 16 }}>
      <img src={url} width="100%" alt="dog" />
      <div>
        <p>Name: {name}</p>
        <br />
        <p>Bred for: {bred_for}</p>
        <br />
        <p>Breed_group: {breed_group}</p>
        <br />
        <p>Temperament: {temperament}</p>
        <br />
        <p>Life_span: {life_span}</p>
        <br />
        <p>Height: {height.metric}</p>
        <br />
        <p>Weight: {weight.metric}</p>
        <br />
      </div>
    </DogSection>
  );
};
