module.exports = {
	// other next config
	i18n: {
		locales: ["en", "ms"],
		defaultLocale: "en",
	},
	env: {
		SPREADSHEET_ID: "16UTNeOr-GXlzUy7cKhrUZnSAB7pJTrlDlQtaWm4y-p0",
		SHEET_ID: "1393119918",
		CLIENT_EMAIL: "volcan-test@plucky-snowfall-171912.iam.gserviceaccount.com",
		PRIVATE_KEY:
			"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCo1akrJawxTDua\n/Aa1+z1yZjye0RHGfBvZ44zOznyzkQY8S8GNxJjE8X7JVGLUkOMv0V1gUp8lO1hq\nXLeDXF9C+EFIm+vyJA6j8rjAfhS59Osx2AzX3DOuYfDGluUHq7Wc0YtZW5U0+ZIf\nYGbTlTbXfvJP7QCKul+JsLK7xKFl1FN6k2E/Gi6Eh/sDtHMLdKL5J9TMd0x5fA5a\nzzn1Zi9MFyC7sa+Cp6SSQ908upUdlnsNU/Sx3/ohWvuhWkIoUd6KzYMEZpo2DZha\nv6Hw4YtfdiZ4172M1FKeMpc6ckcBiABpKwXsl7F5g+bk5oDvbWF+eGGlJs4suE72\n7pZ60MO9AgMBAAECggEAGdZ06K7/vp2hg5LtPf1ghnjh7xYkx8DnjD1YJ7APAnX/\nw8t+KAF9taoVkp8Q7uHrer5qMVsDkvGVktV0mixRQdD3QLLn9WsSOIHlR0QkTN8P\n/VVIheJjoFzJucKO81ESXpjs3/R1jaFh/N5GbjvoJCt/zr6A9joWc95wQ+8QGiKX\n94y5m46Q2pgPadwkwRue9PIoDiJWaf1NzhTsp+KyncT0bGaBph3jhC7k3SsnblWd\nW/vpOlgpyu7va9+4+GW2Em4FGjr6D1JJdys0UdS2moxYkGxfRy24Y82bBu+Luaa7\n8zd2dDgx7XecjS/4qDqafuaXA6de/tcjopQbi2a6SwKBgQDh7xxoc904FCgG4aRc\nUd/WM/I2gYqGB7Rp9rSFX2wSGohBL8NiFvoIaE1Sl1PfV2b2rFOvgDWA4ZwS7Lg1\nZQCYRnFRbTbPsl8v1w4KzPMWN6nMoL8nB2ox8g3yQB9W48s6iStd+JpijndG1wxn\n+xM2R4VP1YmCWwJoddjOdsEmXwKBgQC/TVhwtuqB45u4M/4UA0y985kC8SG5lZxo\nlu5P2D4s9LfZJMMGJwqRTSNs8k6Clay8gVV96ogGSIU6FU3cUGNLsz/2av0Xc3OU\nSlkfP/t20hZrt6FYHKlGJGCbNqzewRv6PXwvzbymg8nDRUP3E/8G8aXSPEntvhQg\nHuXrWsYzYwKBgQDeBItE9X6QyfXfdUJ/WhF8u8Ur3LZUKSQX8M/KNE/Npnb4n8f/\nDxcaxewd2gkYcxoCEquVzYZGJO2rByWpipxABxD59DmldeHl8A2jfWzvCzn3lIri\n/n1ToUolIO/rAaRG3F5aVJ7ZdKgvW8mcMHTbpQKSxgL/rxE5t3yavsXlPwKBgQC9\nDfQMGEjzKnvW89Lx9jzeMCIULTc2D+vt1NMZJ0xy4znZp6Hwr56a8A/FeEUsejym\nYm6ZrLDW/M5lE27J/svSoQfiP+N1TIx5jWw8HOAnkgHEXEpgKJsFDahHXCZFUbST\nfjX/jCQWr4EysH41bJaJR0Cn3xr0j/eVstNn32KmnwKBgQCuxASi6MdVjJbZkdA3\nynsQETC1iktOIj4FwZ9x7vc5zjlWA+YQAkZ69FNgeJJEdhH+Lk+wPWYv7cdHPQVW\nGTTZacMme3XFxElJF76vJJWDs2K/fcmrCXJFB9uq+LmL6quFXUx3pqNVWyVPMCJW\nmo0iXOLDGsRzQDupTaUGAtrSqQ==\n-----END PRIVATE KEY-----\n",
	},
	webpack: (config, options) => {
		config.node = {
			// Some libraries import Node modules but don't use them in the browser.
			// Tell Webpack to provide empty mocks for them so importing them works.
			...config.node,
			fs: "empty",
			child_process: "empty",
			net: "empty",
			tls: "empty",
		};

		return config;
	},
};
