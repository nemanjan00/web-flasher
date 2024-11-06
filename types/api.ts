export interface FirmwareResource {
	id: string;
	title: string;
	page_url?: string;
	zip_url?: string;
	release_notes?: string;
}

export interface FirmwareReleases {
	releases: {
		stable: FirmwareResource[];
		alpha: FirmwareResource[];
	};
	pullRequests: FirmwareResource[];
}

export interface DeviceHardware {
	hwModel: number;
	hwModelSlug: string;
	platformioTarget: string;
	architecture: string;
	activelySupported: boolean;
	displayName: string;
}

export function getCorsFriendyReleaseUrl(url: string) {
	const zipName = url.split('/').slice(-1)[0];
	const firmwareName = zipName.replace('.zip', '')
		.replace('-esp32-', '-')
		.replace('-esp32c3-', '-')
		.replace('-esp32c6-', '-')
		.replace('-esp32s3-', '-')
		.replace('-nrf52840-', '-')
		.replace('-stm32-', '-')
		.replace('-rp2040-', '-')
	return `https://mesh-serbia.s3.eu-central-1.amazonaws.com/${firmwareName}`;
}
