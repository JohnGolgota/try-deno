export interface ListEntityName {
	entityName: string;
	folder: string;
}
//Esta es la lista de las entidades que tenemos actualmente
const entityList: ListEntityName[] = [
	{
		entityName: "employee",
		folder: "employee",
	},
	{
		entityName: "address",
		folder: "employee",
	},
	{
		entityName: "headquarter",
		folder: "employee",
	},
	{
		entityName: "neighborhood",
		folder: "employee",
	},
	{
		entityName: "rolejob",
		folder: "employee",
	},
	{
		entityName: "city",
		folder: "employee",
	},
	{
		entityName: "department",
		folder: "employee",
	},
	{
		entityName: "sosemployee",
		folder: "employee",
	},
	{
		entityName: "account",
		folder: "employee",
	},
	{
		entityName: "apiclient",
		folder: "employee",
	},
	{
		entityName: "status",
		folder: "maintenance",
	},
	{
		entityName: "responsible_reparation",
		folder: "maintenance",
	},
	{
		entityName: "priority",
		folder: "maintenance",
	},
	{
		entityName: "maintenance",
		folder: "maintenance",
	},
	{
		entityName: "category",
		folder: "maintenance",
	},
	{
		entityName: "area",
		folder: "maintenance",
	},
	{
		entityName: "locality",
		folder: "employee",
	},
	{
		entityName: "company",
		folder: "maintenance",
	},
	// customer
	{
		entityName: "customer",
		folder: "customer",
	},
	{
		entityName: "contract_type_customer",
		folder: "customer",
	},
	{
		entityName: "tbl_contact",
		folder: "customer",
	},
	{
		entityName: "tbl_permit",
		folder: "customer",
	},
	{
		entityName: "type_contact",
		folder: "customer",
	},
	{
		entityName: "type_customer",
		folder: "customer",
	},
	{
		entityName: "type_method",
		folder: "customer",
	},
	{
		entityName: "data_treatment_policy",
		folder: "customer",
	},
	{
		entityName: "customer_treatment_policy",
		folder: "customer",
	},
	{
		entityName: "consent_statuses",
		folder: "customer",
	},
	// customer.pageExclusive
	{
		entityName: "promote_property",
		folder: "pageExclusive",
	},
	{
		entityName: "contact_us",
		folder: "pageExclusive",
	},
	{
		entityName: "work_whit_us",
		folder: "pageExclusive",
	},
];
export default entityList;
