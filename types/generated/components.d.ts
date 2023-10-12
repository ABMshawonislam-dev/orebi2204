import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorNameColor extends Schema.Component {
  collectionName: 'components_color_name_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ItemItem extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.Component<'item.list', true>;
  };
}

export interface ItemList extends Schema.Component {
  collectionName: 'components_item_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuItem extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'color-name.color': ColorNameColor;
      'item.item': ItemItem;
      'item.list': ItemList;
      'menu.item': MenuItem;
    }
  }
}
