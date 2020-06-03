import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Se añade un evento para que cargue la altura de la imagen
    // cuando se haya cargado
    this.imageRef.current.addEventListener('load', this.setImageSpans);
  }

  setImageSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5) + 1;

    this.setState({ spans });
  };

  render() {
    console.log('imagecard render');
    const { description, urls } = this.props.image;
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          margin: 'auto'
        }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
