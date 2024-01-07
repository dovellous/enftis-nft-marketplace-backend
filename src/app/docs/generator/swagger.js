const swaggerAutogen = require('swagger-autogen')()

const version = process.env.BACKEND_SWAGGER_VER || 'v1';

const host = process.env.NODE_ENV === 'production' ? process.env.BACKEND_SERVICE_HOST : '127.0.0.1';

const port = process.env.BACKEND_SERVICE_PORT || 8000;

export const apiDoc = {
    info: {
        'title': 'Enftis API',
            'description': 'Official API for creating a NFT Marketplace resources',
                'termsOfService': 'https://web3defi.dev/terms/',
                    'contact': {
            'name': 'API Support',
                'url': 'https://support.web3defi.dev',
                    'email': 'support@web3defi.dev'
        },
        'license': {
            'name': 'Apache 2.0',
                'url': 'http://www.apache.org/licenses/LICENSE-2.0.html'
        },
        'version': '1.0.0'
    },
    schemes: ['http', 'https', 'ws', 'wss'],
    externalDocs: {
        description: 'Find more info about this API here.',
        url: 'https://docs.web3defi.dev/api/enftis/'
    },
    host: host+':'+port,
    basePath: '/',
    schemes:  ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            'name': 'Client',
            'description': 'Client Endpoints: The identity of device that consumes the API.'
        },
        {
            'name': 'User',
            'description': 'User Endpoints: The User Model'
        },
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', // can be 'header', 'query' or 'cookie'
            name: 'X-API-KEY', // name of the header, query parameter or cookie
            description: 'Some description...'
        },
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },
    definitions: {
        Roles: {
            enum: ['root', 'super-admin', 'tenant-admin', 'editor', 'moderator', 'observer', 'subscriber', 'guest']
        },
        Client: {
            clientDeviceId: 'SERIAL1234567890',
            clientDeviceName: 'My Device #001',
            clientDevicePubKey: 'client.public.pem',
            serverDevicePubKey: 'server.public.pem',
            clientDeviceUserAgent: 'Device Browser v 5.0.0',
            $clientId: 'a187ao9a3afe36a3984ca7',
            $clientSecret: 'cco9a3afe36a187ao9a3afe36a3984ca7a3984ca7a187ao9a3afe36a3984ca7',
        },
        User: {
            $firstName: 'John',
            $lastName: 'Doe',
            username: 'john.doe',
            emailAddress: 'john.doe@domain.tld',
            password: 'pass123',
            phoneNumber: '+1 (234) 567 8901',
            photoURL: 'https://img.com',
            age: 24,
            isActive: true,
            emailAddressVerified: false,
            phoneNumberVerified: false,
            accessLevels: {
                defaultRole: 'admin',
                roles: ['admin', 'observer'],
                permissions: ['can-view', 'can-edit', 'can-create', 'can-delete']
            },
            organization: '693483902049',
            firebaseUserData: {
                uid: 'iLX9898yhdsiudk',
                displayName: 'John Doe',
                email: 'john.doe@domain.tld',
                phoneNumber: '+1 (234) 567 8901',
                photoURL: 'https://img.com'
            },
            clientId: {
                $ref: '#/definitions/Client'
            },
        },
    },
    components: {
        examples : {
            ClientResponse201: {
                clientDeviceId: 'SERIAL1234567890',
                clientDeviceName: 'My Device #001',
                clientDevicePubKey: 'client.public.pem',
                serverDevicePubKey: 'server.public.pem',
                clientDeviceUserAgent: 'Device Browser v 5.0.0',
                $clientId: 'a187ao9a3afe36a3984ca7',
                $clientSecret: 'cco9a3afe36a187ao9a3afe36a3984ca7a3984ca7a187ao9a3afe36a3984ca7',
            },
            ClientResponse400: {
                status: 'error',
                error: 'BAD_REQUEST',
                message: 'INVALID_PARAMETERS_CLIENT_MODEL',
            },
            ClientResponse500: {
                status: 'error',
                error: 'SERVER_ERROR',
                message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL',
            }
        }
    }
}

const outputFile = './src/app/docs/output/swagger-' + version + '.json'

const endpointsFiles = ['./src/index.ts']

swaggerAutogen(outputFile, endpointsFiles, apiDoc).then(() => {
    console.log('Docs updated!');
})