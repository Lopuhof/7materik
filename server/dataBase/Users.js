import sequelize from 'sequelize';

function users(sequelize) {
    return sequelize.define('Users', {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true
        },
        nickname: {
            type: sequelize.STRING(20)
        },
        email: {
            type: sequelize.STRING(20)
        },
        password: {
            type: sequelize.STRING(50)
        },
        avatar: {
            type: sequelize.BLOB('medium')
        },
        registration_data: {
            type: sequelize.DATEONLY
        },
        articles: {
            type: sequelize.TEXT
        }, 
        access_rights: {
            type: sequelize.STRING(8)
        }
    }, {
        timestemps: false,
        tableName: 'users'
    });
};

module.exports = users;