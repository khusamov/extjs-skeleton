
Ext.define('SkeletonApp.model.Base', {

	extend: 'Ext.data.Model',
	requires: ['SkeletonApp.data.schema.BaseSchema'],

	schema: 'base',

	/**
	 * Специальное поле для обмена ID с сервером.
	 * Симулятор сервера этот параметр настраивает у себя автоматически.
	 */
	clientIdProperty: 'clientId',

	fields: [{
		name: 'id',
		type: 'integer'
	}]

});