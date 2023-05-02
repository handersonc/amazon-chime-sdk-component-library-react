import { FC } from 'react';
interface PortalProps {
    /** Specifies the DOM node that the children of the portal will be render into. */
    rootId?: string;
}
export declare const Portal: FC<React.PropsWithChildren<PortalProps>>;
export default Portal;
