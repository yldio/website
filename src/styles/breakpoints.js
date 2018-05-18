import { createStatic } from 'styled-components-breakpoint';

export default createStatic({
  mobile: 0, // targeting all devices
  phablet: 550, // smaller tablets/larger smartphones
  tablet: 737, // targeting devices that are larger than the iPhone 6 Plus (which is 736px in landscape mode)
  desktop: 1025, // targeting devices that are larger than the iPad (which is 1024px in landscape mode)
});
