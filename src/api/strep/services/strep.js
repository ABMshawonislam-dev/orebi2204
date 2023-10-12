'use strict';

/**
 * strep service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strep.strep');
