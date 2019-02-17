export-apis:
	node out/export-api.js > src/kubernetes-model.ts

export-builder:
	node out/export-builder.js > src/kubernetes-builder.ts