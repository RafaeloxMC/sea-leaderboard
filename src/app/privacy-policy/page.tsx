import React from "react";

function PrivacyPolicy() {
	return (
		<div className="font-sans min-h-screen bg-white dark:bg-black text-black dark:text-white">
			<main className="px-8 sm:px-20 pb-20">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16 items-center justify-center">
						<h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent mb-6">
							Privacy Policy
						</h1>
						<p>
							Welcome to the privacy policy! Here you will find
							information on how your data is being processed and
							who has access to it.
						</p>
						<br />
						<p>
							In the following the terms &quot;SEA&quot;,
							&quot;Shoot &apos;Em All&quot; &quot;Shoot Em
							All&quot; and &quot;the service&quot; refer to this
							website. The term &quot;the developer&quot; refers
							to xvcf. For contact, please visit:
							<br />
							<a
								className="hover:cursor-pointer hover:underline"
								href="https://xvcf.dev/"
							>
								https://xvcf.dev/
							</a>
						</p>
						<br />
						<p>
							<span className="text-4xl font-extrabold">
								What data is being stored?
							</span>
							<br />
							The data stored by SEA includes:
						</p>
						<ul>
							<li>- The score of your game session</li>
							<li>- The accuracy of your game session</li>
							<li>- The date of your game session </li>
							<li>
								- An anonymized name as well as a a unique
								identifier
							</li>
						</ul>
						<p>SEA does not use cookies or trackers.</p>
						<br />
						<p>
							<span className="text-4xl font-extrabold">
								Who has access to this data?
							</span>
							<br />
							The data itself is visible to anyone using the
							provided services. This is required by the
							functionality of the leaderboard. The developer does
							not store any private information such as IP
							addresses or geolocations. To process data and
							provide the service, Vercel and MongoDB are being
							used. For further information on how they process
							your data, please take a look at their own privacy
							policies, they are linked below.
						</p>
						<br />
						<a
							className="hover:cursor-pointer hover:underline"
							href="https://vercel.com/legal/privacy-policy"
						>
							https://vercel.com/legal/privacy-policy
						</a>
						<br />
						<a
							className="hover:cursor-pointer hover:underline"
							href="https://mongodb.com/legal/privacy/privacy-policy"
						>
							https://mongodb.com/legal/privacy/privacy-policy
						</a>
						<br />
						<br />
						<p>
							<span className="text-4xl font-extrabold">
								Can I delete the data I produce?
							</span>
							<br />
							The data you produce is completely anonymized. If
							you still want to request the deletion of your data,
							please contact the developer.
						</p>
						<br />
						<br />
						<p>
							<span className="text-4xl font-extrabold">
								That&apos;s it!
							</span>
							<br />
							If you have questions, feel free to contact the
							developer.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default PrivacyPolicy;
