var React = require('react');
var Radium = require('radium');
var StyleRoot = require('radium').StyleRoot;
var PureMixin = require('react-pure-render/mixin');

var styles = {
  list: {
    margin: 0,
    border: 0,
    padding: 0
  },

  item: {
    display: 'inline-block',
    width: '100%',

    '@media (min-width: 500px)': {
      width: '100%'
    },

    '@media (min-width: 800px)': {
      width: '50%'
    },

    '@media (min-width: 1200px)': {
      width: '33.33%'
    },

    '@media (min-width: 1600px)': {
      width: '25%'
    }
  }
};

var List = React.createClass({
  mixins: [PureMixin],

  render: function () {
    var props = this.props,
        itemProps = props.itemProps || {};

    if (itemProps.toJS) {
      itemProps = itemProps.toJS();
    }

    return (
      <div>
        <StyleRoot>
          <ul style={styles.list}>
            {props.items.map(function (item, index) {
              var itemData = item.toJS ? item.toJS() : item

              return (
                <li key={'list-item-' + index} style={styles.item}>
                  <props.component {...itemProps} {...itemData} />
                </li>
              );
            })}
          </ul>
        </StyleRoot>
      </div>
    )
  }
});

module.exports = Radium(List);
