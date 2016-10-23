var Color = require('color');
var React = require('react');
var Radium = require('radium');
var Icons = require('react-icons/lib/fa');
var PureMixin = require('react-pure-render/mixin');
var Button = require('floflo-react-inputs').Button;
var Link = require('react-router').Link;
var LinkRadium = Radium(Link);

var styles = {
  item: {
    boxSizing: 'border-box',
    padding: '5px',
    width: '100%',
    font: 'inherit'
  },

  link: {
    display: 'block',
    overflow: 'hidden',
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: '.1s 0s ease-in-out'
  },

  header: {
    paddingTop: '56.25%',
    overflow: 'hidden',
    height: 0,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  border: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    borderTopWidth: '2px',
    borderBottomWidth: 0,
    borderTopStyle: 'solid',
    backgroundColor: 'inherit'
  },

  circle: {
    position: 'absolute',
    top: 0,
    left: '16px',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    borderWidth: '2px',
    borderStyle: 'solid',
    backgroundColor: 'inherit',
    textAlign: 'center',
    padding: '3px',
    borderColor: 'inherit',
    backgroundColor: 'inherit'
  },

  logo: {
    marginTop: '-1px'
  },

  content: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '25px 16px 16px 16px',
    width: '100%'
  },

  title: {
    overflow: 'hidden',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'normal',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-word'
  },

  description: {
    display: 'block',
    display: '-webkit-box',

    /* Fallback for non-webkit: fontSize * lineHeight * linesToShow */
    height: '54px',
    margin: '0 auto',
    fontSize: '15px',
    lineHeight: '1.2',

    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  ctas: {
    paddingTop: '10px',
    fontSize: '14px',
    textAlign: 'right'
  }
};

var Item = React.createClass({
  mixins: [PureMixin],

  getColor: function () {
    return this.props.color || '#000';
  },
  getColorLight: function () {
    var color = Color(this.getColor());

    return color.lighten(0.4).rgbString();
  },
  getBackgroundColor: function () {
    return this.props.backgroundColor || '#fff';
  },
  getBackgroundColorLight: function () {
    var color = Color(this.getBackgroundColor());

    return color.lighten(0.15).rgbString();
  },
  getBoxShadow: function () {
    return this.props.boxShadow ? '0 1px 8px rgba(0,0,0,0.3)' : 'initial';
  },

  render: function () {
    var props = this.props,
        color = this.getColor(),
        colorLight = this.getColorLight(),
        backgroundColor = this.getBackgroundColor(),
        backgroundColorLight = this.getBackgroundColorLight(),
        boxShadow = this.getBoxShadow(),
        Icon = Icons[props.logo],
        url = props.url;

    return (
      <div style={styles.item}>
        <LinkRadium style={[styles.link, {boxShadow}, {backgroundColor: backgroundColor, ':hover': {backgroundColor: backgroundColorLight}}]} to={url} title={props.name}>
          <div style={[styles.header, {backgroundImage: 'url(' + props.picture + ')'}]}></div>
          {Icon
            ? <div style={[styles.border, {borderColor: colorLight}]}>
                <div style={styles.circle}>
                  <div style={[styles.logo, {color}]}>
                    <Icon />
                  </div>
                </div>
              </div>
            : null
          }
          <div style={[styles.content]}>
            <h3 style={[styles.title, {color}]}>{props.title}</h3>
            {props.description
              ? <p style={[styles.description, {color: colorLight}]}>{props.description}</p>
              : null
            }
            <div style={styles.ctas}>
              <Button text={props.ctaText} color={color} size="standard" />
            </div>
          </div>
        </LinkRadium>
      </div>
    )
  }
});

module.exports = Radium(Item);
