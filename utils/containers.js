import {cx} from 'emotion';
import hoistStatics from 'hoist-non-react-statics';
import {withMergedProps} from 'react-merge-props';

/**
 * Return the React display name of the given component.
 */

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

/**
 * Hoist non-React static properties from WrappedComponent to OutputComponent,
 * then set `displayName` and a reference to the WrappedComponent type.
 */

export const withStatics = (
  WrappedComponent,
  wrapperName,
) => OutputComponent => {
  hoistStatics(OutputComponent, WrappedComponent);

  return Object.assign(OutputComponent, {
    WrappedComponent,
    displayName: `${wrapperName}(${getDisplayName(WrappedComponent)})`,
  });
};

/**
 * Merge the `className` prop supplied to the OutputComponent into the
 * `className` of the top-level element returned by the WrappedComponent.
 */

export const mergeClasses = withMergedProps({
  className: (inner, outer) => cx(inner, outer),
});
