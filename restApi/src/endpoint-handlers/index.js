// Require handlers
import descriptor from './descriptor.js';
import glanceData from './glance_data.js';
import installed from './installed.js';
import postCard from './post_card.js';
import uninstalled from './uninstalled.js';
import topics from './topics.js';

// Endpoint constants
const DESCRIPTOR_ENDPOINT = '/descriptor';
const INSTALLED_ENDPOINT = '/installed';
const UNINSTALLED_ENDPOINT = '/uninstalled';
const GLANCE_DATA_ENDPOINT = '/glance-data';
const POST_CARD_ENDPOINT = '/post-card';
const TOPICS_ENDPOINT = '/topics';

/* --- export endpoint handlers --- */

const endpointHandlers = {};

// For installation
endpointHandlers[DESCRIPTOR_ENDPOINT] = descriptor;
endpointHandlers[INSTALLED_ENDPOINT] = installed;
endpointHandlers[UNINSTALLED_ENDPOINT] = uninstalled;

// Glances
endpointHandlers[GLANCE_DATA_ENDPOINT] = glanceData;
endpointHandlers[POST_CARD_ENDPOINT] = postCard;

// Other
endpointHandlers[TOPICS_ENDPOINT] = topics;

/* --- export list of endpoints to apply JWT validation on --- */

const jwtEndpoints = [
  GLANCE_DATA_ENDPOINT,
  POST_CARD_ENDPOINT,
  TOPICS_ENDPOINT,
];

export { endpointHandlers, jwtEndpoints };
