/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The middle name
         */
        "headers": any;
        /**
          * The last name
         */
        "last": string;
        /**
          * The first name
         */
        "rows": any;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The middle name
         */
        "headers"?: any;
        /**
          * The last name
         */
        "last"?: string;
        "onTodoCompleted"?: (event: CustomEvent<any>) => void;
        /**
          * The first name
         */
        "rows"?: any;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
