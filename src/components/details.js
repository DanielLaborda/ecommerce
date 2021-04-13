import React, { Component } from 'react';

class Details extends Component {
    renderChildren = () => {
        const { links, info } =this.props;
        let children = [];

        if(links) {
            children = links.map((link,index) => {
                return <a key={index} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
        } else if(info) {
            children = info.map((info,index) => {
                return <a key={index} className='details__item'>{info.title}</a>
            })
        }
        return children;
    }
    

  render() {
    const { className, title } = this.props;

    return (
      <div className={`${className} details`}>
            <div className='details__title'>{title}</div>
            <div className='details__links'>
                {
                    this.renderChildren()
                }
            </div>
      </div>
    );
  }
}


export default Details;