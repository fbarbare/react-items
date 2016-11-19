var React = require('react');
var Radium = require('radium');
var StyleRoot = require('radium').StyleRoot;
var PureMixin = require('react-pure-render/mixin');

var styles = {
  list: {
    margin: 0,
    border: 0,
    padding: 0
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
                <props.component key={'list-item-' + index} {...itemProps} {...itemData} />
              );
            })}
          </ul>
        </StyleRoot>
      </div>
    )
  }
});

module.exports = Radium(List);
