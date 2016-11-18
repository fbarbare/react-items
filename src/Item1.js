var Color = require('color');
var React = require('react');
var Radium = require('radium');
var Icons = require('react-icons/lib/fa');
var PureMixin = require('react-pure-render/mixin');
var Button = require('floflo-react-inputs').Button;

var styles = {
  item: {
    boxSizing: 'border-box',
    padding: '5px',
    width: '100%',
    font: 'inherit'
  },

  container: {
    display: 'block',
    overflow: 'hidden',
    borderRadius: '2px'
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
    // display: ['-webkit-box', 'block'],

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
  },
  cta: {
    padding: '0 5px'
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
  getBoxShadow: function () {
    return this.props.boxShadow ? '0 1px 8px rgba(0, 0, 0, 0.3)' : 'initial';
  },

  getCtas: function () {
    var ctas = this.props.ctas || [];

    if (this.props.ctaText) {
      ctas.push({
        text: this.props.ctaText,
        href: this.props.url
      });
    }

    return ctas
  },

  render: function () {
    var props = this.props,
        ctas = this.getCtas(),
        color = this.getColor(),
        colorLight = this.getColorLight(),
        backgroundColor = this.getBackgroundColor(),
        boxShadow = this.getBoxShadow(),
        Icon = Icons[props.logo];

    return (
      <div style={styles.item}>
        <div style={[styles.container, {boxShadow, backgroundColor}]}>
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
              {ctas.map((cta, index) => {
                cta.color = cta.color || color;
                cta.size = cta.size || "standard";
                cta.display = cta.display || "inline";

                return (
                  <span key={'item1-cta-' + index} style={styles.cta}>
                    <Button {...cta} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Radium(Item);
