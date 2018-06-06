import _ from 'lodash';
import React from 'react';
import createReactClass from 'create-react-class';
import { withRouter } from 'react-router';
import { compose, getDisplayName, setDisplayName } from 'recompose';
import { StyleSheet, css } from './helpers/aphrodite';

export default function wrapComponent(PureComponent) {

  const displayName = getDisplayName(PureComponent);

  function mapNestedStyle(stylesheet) {
    _.each(stylesheet, (item, selectorKey) => {
      const selectors = item._definition;
      _.each(selectors, (selector, key) => {
        if (_.isPlainObject(selector) && key[0] !== '&' && key[0] !== ':' && key[0] !== '@') {
          delete selectors[key];
          selectors[`&${key}`] = selector;
        }
      });
    });
    return stylesheet;
  }

  function getStyle() {
    const componentStyle = PureComponent.cssStyle;
    if (componentStyle) {
      const stylesheet = StyleSheet.create({ component: componentStyle });
      const styleWithNesting = mapNestedStyle(stylesheet);
      const classNames = css(styleWithNesting.component);
      return classNames;
    }
  }

  function wrapRouter() {
    return withRouter;
  }

  /* eslint-disable-next-line react/prefer-es6-class */
  const wrapper = createReactClass({
    render() {
      return (
        <div className={getStyle()}>
          <PureComponent {...this.props} />
        </div>
      );
    }
  });

  const withName = setDisplayName(`${displayName}Component`);
  const reactRouter = wrapRouter();

  return compose(
    withName,
    reactRouter,
  )(wrapper);
}
