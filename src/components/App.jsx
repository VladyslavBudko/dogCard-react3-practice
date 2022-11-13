import { Component } from 'react';
import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { GlobalStyle } from './GlobalStyle';
import { BreedSelect } from './BreedSelect';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { errorMessages } from 'constants';

export class App extends Component {
  state = {
    dog: null,
    error: null,
    isLoading: false,
  };

  selectBreed = async (breedId) => {
    try {
      this.setState({ isLoading: true });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
      console.log(dog);

    } catch {
      this.setState({ error: errorMessages.fetchDog });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { dog, error, isLoading } = this.state;

    return (
      <Layout>
        <BreedSelect onSelect={this.selectBreed} />
        {!dog && <h1>Віберіть породу собаки зі списку вище 👆</h1>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoading && <DogSkeleton />}
        {dog && !isLoading && <Dog dog={dog} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
