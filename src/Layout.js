import React, { PureComponent } from 'react';
import { TweenLite, Power3, Bounce } from 'gsap';
import { layoutAppearance } from './animations';
import './styles/Layout.scss';

export default class Layout extends PureComponent {
  constructor(props){
    super(props);
    this.props = props;
    this.domNode = null;
    this.animation = null;

    this.getNode = this.getNode.bind(this);
    this.playAppearanceAnimation = this.playAppearanceAnimation.bind(this);
  }

  componentDidMount(){
    this.playAppearanceAnimation();
  }

  //прежде чем играть анимацию, нужно проверить был ли переход
  //с другой страницы
  componentWillReceiveProps(nextProps){
    const { pathname } = this.props.location;
    if(nextProps.location.pathname !== pathname){
      this.playAppearanceAnimation();
    }    
  }

  playAppearanceAnimation(){
    //this.animation = TweenLite.fromTo(this.domNode, layoutAppearance.duration, layoutAppearance.from, layoutAppearance.to);
    //TweenLite.fromTo(this.domNode, 0.5, { top: -15, ease: Power2.easeOut }, { top: 0 });
    TweenLite.fromTo(this.domNode, 0.7, { left: "100%", ease: Bounce.easeOut }, { left: 0 });
    console.log("TWEEN IS PLAYING!");
  }

  getNode(node){
    this.domNode = node;
  }

  render() {
    const { className, children } = this.props;
    return (
      <section className={"container-fluid d-flex layout " + className} ref={this.getNode}>
        {children}
      </section>
    );
  }
}
