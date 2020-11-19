// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Group', {
	setup: function(frm) {
		frm.set_query('parent_supplier_group', function() {
			return {
				filters: {
					is_group: 1,
					name: ["!=", frm.doc.supplier_group_name]
				}
			};
		});

		frm.set_query('account', 'accounts', function(doc, cdt, cdn) {
			let row  = locals[cdt][cdn];
			return {
				filters: {
					company: row.company,
					account_type: 'Payable',
					is_group: 0
				}
			};
		});
	},
	refresh: function(frm) {
		// read-only for root supplier group
		frm.set_root_read_only("parent_supplier_group");
	}
});