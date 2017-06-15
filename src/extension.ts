'use strict';

import * as vscode from 'vscode';

import { DepNodeProvider } from './nodeDependencies'

export function activate(context: vscode.ExtensionContext) {
	const rootPath = vscode.workspace.rootPath;

	const nodeDependenciesProvider = new DepNodeProvider(rootPath);

	vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);

	vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`));
	});
	vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
	vscode.commands.registerCommand('nodeDependencies.addEntry', node => vscode.window.showInformationMessage('Successfully called add entry'));
	vscode.commands.registerCommand('nodeDependencies.deleteEntry', node => vscode.window.showInformationMessage('Successfully called delete entry'));
}
