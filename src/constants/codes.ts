export const stockMovementCodes = {
  101: {
    code: '101',
    description: 'Used upon arrival of new stock',
    movementType: 'Movement for new stock',
  },
  102: {
    code: '102',
    description: 'Movement for vendor returns',
    movementType: 'Used when stock is damaged and needs to be returned',
  },
  201: {
    code: '201',
    description: 'Movement for stocks prepared for delivery',
    movementType: 'Used when stock is prepared for delivery',
  },
  202: {
    code: '202',
    description: 'Movement for returned unused materials',
    movementType: 'Used when stock is damaged and needs to be returned',
  },
  203: {
    code: '203',
    description: 'Movement for losses after case ',
    movementType: 'Used when stock are lost during return delivery',
  },
  301: {
    code: '301',
    description: 'Movement for stock reconciliation - excess ',
    movementType: 'Used for excess stock found during manual count',
  },
  302: {
    code: '302',
    description: 'Movement for stock reconciliation - missing',
    movementType: 'Used for missing stock found during manual count',
  },
};
