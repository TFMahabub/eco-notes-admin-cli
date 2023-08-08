/* eslint-disable import/prefer-default-export */
export const useTagsColor = (tag: string) => {
  switch (tag) {
    case 'react.js':
      return 'bg-tag-react';

    case 'angular.js':
      return 'bg-tag-angular';

    case 'vue.js':
      return 'bg-tag-vue';

    case 'express.js':
      return 'bg-tag-express';

    case 'node.js':
      return 'bg-tag-node';

    case 'mongoos':
      return 'bg-tag-mongoos';

    default:
      return 'text-[#000]';
  }
};
