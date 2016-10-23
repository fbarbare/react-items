import React from 'react';
import ReactDOM from 'react-dom';
import PureMixin from 'react-pure-render/mixin';
import {Map, fromJS} from 'immutable';
import {StyleRoot} from 'radium';
import {List, Item1} from './src/index';

var NavBarPanelMenuExample = React.createClass({
  mixins: [PureMixin],

  onMenuButtonClick: function () {
    this.refs.panelMenu.toggleMenu();
  },

  render: function () {
    var items = fromJS([
      {
        title: 'NodeJS',
        url: '/nodejs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec erat faucibus, hendrerit nunc feugiat, tempus purus. Maecenas laoreet cursus quam quis commodo. Morbi facilisis risus elit, sed luctus magna sollicitudin vitae. Pellentesque nec mauris vulputate, laoreet massa in, bibendum mauris. In eget suscipit ipsum. Vestibulum pharetra lectus leo, ut tincidunt ante venenatis non. Fusce non libero in elit commodo porta eget ut orci. Nam vitae pellentesque arcu. Maecenas tristique elementum ultrices. Maecenas in urna luctus, interdum velit eget, sodales mauris. Donec in facilisis lectus. Pellentesque tempus, sapien id sollicitudin bibendum, ligula felis gravida augue, non ornare dolor eros lacinia purus. Nullam lacinia velit erat, in blandit metus molestie sed. Mauris viverra quis augue ac molestie. Maecenas eleifend, nisl lacinia maximus maximus, eros risus semper est, in venenatis sem est ac augue. Nam bibendum nisl augue, luctus malesuada neque aliquam non.',
        picture: 'https://www.seeklogo.net/wp-content/uploads/2015/09/nodejs-logo-vector-download.jpg',
      },
      {
        title: 'ReactJS',
        url: '/reactjs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec erat faucibus, hendrerit nunc feugiat, tempus purus. Maecenas laoreet cursus quam quis commodo. Morbi facilisis risus elit, sed luctus magna sollicitudin vitae. Pellentesque nec mauris vulputate, laoreet massa in, bibendum mauris. In eget suscipit ipsum. Vestibulum pharetra lectus leo, ut tincidunt ante venenatis non. Fusce non libero in elit commodo porta eget ut orci. Nam vitae pellentesque arcu. Maecenas tristique elementum ultrices. Maecenas in urna luctus, interdum velit eget, sodales mauris. Donec in facilisis lectus. Pellentesque tempus, sapien id sollicitudin bibendum, ligula felis gravida augue, non ornare dolor eros lacinia purus. Nullam lacinia velit erat, in blandit metus molestie sed. Mauris viverra quis augue ac molestie. Maecenas eleifend, nisl lacinia maximus maximus, eros risus semper est, in venenatis sem est ac augue. Nam bibendum nisl augue, luctus malesuada neque aliquam non.',
        picture: 'https://blog.zingchart.com/content/images/2016/06/react-1.png',
      },
      {
        title: 'Angular JS',
        url: '/angularjs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec erat faucibus, hendrerit nunc feugiat, tempus purus. Maecenas laoreet cursus quam quis commodo. Morbi facilisis risus elit, sed luctus magna sollicitudin vitae. Pellentesque nec mauris vulputate, laoreet massa in, bibendum mauris. In eget suscipit ipsum. Vestibulum pharetra lectus leo, ut tincidunt ante venenatis non. Fusce non libero in elit commodo porta eget ut orci. Nam vitae pellentesque arcu. Maecenas tristique elementum ultrices. Maecenas in urna luctus, interdum velit eget, sodales mauris. Donec in facilisis lectus. Pellentesque tempus, sapien id sollicitudin bibendum, ligula felis gravida augue, non ornare dolor eros lacinia purus. Nullam lacinia velit erat, in blandit metus molestie sed. Mauris viverra quis augue ac molestie. Maecenas eleifend, nisl lacinia maximus maximus, eros risus semper est, in venenatis sem est ac augue. Nam bibendum nisl augue, luctus malesuada neque aliquam non.',
        picture: 'https://www.brandeps.com/logo-download/A/Angular-JS-01.png',
        logo: 'FaGoogle'
      },
      {
        title: 'Aurelia',
        url: '/angularjs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec erat faucibus, hendrerit nunc feugiat, tempus purus. Maecenas laoreet cursus quam quis commodo. Morbi facilisis risus elit, sed luctus magna sollicitudin vitae. Pellentesque nec mauris vulputate, laoreet massa in, bibendum mauris. In eget suscipit ipsum. Vestibulum pharetra lectus leo, ut tincidunt ante venenatis non. Fusce non libero in elit commodo porta eget ut orci. Nam vitae pellentesque arcu. Maecenas tristique elementum ultrices. Maecenas in urna luctus, interdum velit eget, sodales mauris. Donec in facilisis lectus. Pellentesque tempus, sapien id sollicitudin bibendum, ligula felis gravida augue, non ornare dolor eros lacinia purus. Nullam lacinia velit erat, in blandit metus molestie sed. Mauris viverra quis augue ac molestie. Maecenas eleifend, nisl lacinia maximus maximus, eros risus semper est, in venenatis sem est ac augue. Nam bibendum nisl augue, luctus malesuada neque aliquam non.',
        picture: 'http://ryanchenkie.com/store/uploads/2015/08/aurelia-cover.png',
        logo: null
      },
      {
        title: 'Ember',
        url: '/angularjs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec erat faucibus, hendrerit nunc feugiat, tempus purus. Maecenas laoreet cursus quam quis commodo. Morbi facilisis risus elit, sed luctus magna sollicitudin vitae. Pellentesque nec mauris vulputate, laoreet massa in, bibendum mauris. In eget suscipit ipsum. Vestibulum pharetra lectus leo, ut tincidunt ante venenatis non. Fusce non libero in elit commodo porta eget ut orci. Nam vitae pellentesque arcu. Maecenas tristique elementum ultrices. Maecenas in urna luctus, interdum velit eget, sodales mauris. Donec in facilisis lectus. Pellentesque tempus, sapien id sollicitudin bibendum, ligula felis gravida augue, non ornare dolor eros lacinia purus. Nullam lacinia velit erat, in blandit metus molestie sed. Mauris viverra quis augue ac molestie. Maecenas eleifend, nisl lacinia maximus maximus, eros risus semper est, in venenatis sem est ac augue. Nam bibendum nisl augue, luctus malesuada neque aliquam non.',
        picture: 'https://blog.zingchart.com/content/images/2016/06/emberjs.jpg',
      }
    ]);

    var itemProps = Map({
      ctaText: 'Read me...',
      color: '#555',
      backgroundColor: '#ccc',
      boxShadow: true,
      logo: 'FaPlane'
    });

    return (
      <div>
        <List component={Item1} itemProps={itemProps} items={items} />
      </div>
    );
  }
});

ReactDOM.render(
  <NavBarPanelMenuExample />,
  document.getElementById('app')
);
