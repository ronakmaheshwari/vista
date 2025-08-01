declare module 'react-native-masonry-list' {
  import { Component } from 'react';
  import { ViewStyle, ImageStyle } from 'react-native';

  export interface MasonryImage {
    uri: string;
    dimensions?: { width: number; height: number };
    [key: string]: any;
  }

  export interface MasonryListProps {
    images: MasonryImage[];
    columns?: number;
    spacing?: number;
    imageContainerStyle?: ImageStyle;
    completeCustomComponent?: (item: MasonryImage) => JSX.Element;
    renderIndividualFooter?: (item: MasonryImage) => JSX.Element;
    backgroundColor?: string;
    onPressImage?: (item: MasonryImage) => void;
    rerender?: boolean;
    sorted?: boolean;
    listContainerStyle?: ViewStyle;
  }

  export default class MasonryList extends Component<MasonryListProps> {}
}
