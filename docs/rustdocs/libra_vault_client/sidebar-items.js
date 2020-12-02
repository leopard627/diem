initSidebarItems({"enum":[["Capability","The various set of capabilities available to a policy within Vault."],["Error",""]],"fn":[["process_generic_response","Processes a generic response returned by a vault request. This function simply just checks that the response was not an error and calls response.into_string() to clear the ureq stream."],["process_policy_list_response","Processes the response returned by a policy list vault request."],["process_policy_read_response","Processes the response returned by a policy read vault request."],["process_secret_list_response","Processes the response returned by a secret list vault request."],["process_secret_read_response","Processes the response returned by a secret read vault request."],["process_token_create_response","Processes the response returned by a token create vault request."],["process_token_renew_response","Processes the response returned by a token renew vault request."],["process_transit_create_response","Processes the response returned by a transit key create vault request."],["process_transit_export_response","Processes the response returned by a transit key export vault request."],["process_transit_list_response","Processes the response returned by a transit key list vault request."],["process_transit_read_response","Processes the response returned by a transit key read vault request."],["process_transit_restore_response","Processes the response returned by a transit key restore vault request."],["process_transit_sign_response","Processes the response returned by a transit key sign vault request."],["process_unsealed_response","Processes the response returned by a seal-status() vault request."]],"mod":[["dev",""],["fuzzing",""]],"struct":[["BackupInfo",""],["Client","Client provides a client around the restful interface to a Vault servce. Learn more here: https://www.vaultproject.io/api-docs/"],["KeyBackup","Key backup / restore format Example: { \"policy\":{ \"name\":\"local_owner_key__consensus\", \"keys\":{ \"1\":{ \"key\":\"C3R5O8uAfrgv7sJmCMSLEp1R2HmkZtwdfGT/xVvZVvgCGo6TkWga/ojplJFMM+i2805X3CV7IRyNLCSJcr4AqQ==\", \"hmac_key\":null, \"time\":\"2020-05-29T06:27:38.1233515Z\", \"ec_x\":null, \"ec_y\":null, \"ec_d\":null, \"rsa_key\":null, \"public_key\":\"AhqOk5FoGv6I6ZSRTDPotvNOV9wleyEcjSwkiXK+AKk=\", \"convergent_version\":0, \"creation_time\":1590733658 } }, \"derived\":false, \"kdf\":0, \"convergent_encryption\":false, \"exportable\":true, \"min_decryption_version\":1, \"min_encryption_version\":0, \"latest_version\":1, \"archive_version\":1, \"archive_min_version\":0, \"min_available_version\":0, \"deletion_allowed\":false, \"convergent_version\":0, \"type\":2, \"backup_info\":{ \"time\":\"2020-05-29T06:28:48.2937047Z\", \"version\":1 }, \"restore_info\":null, \"allow_plaintext_backup\":true, \"version_template\":\"\", \"storage_prefix\":\"\" } }"],["KeyBackupInfo",""],["KeyBackupPolicy",""],["PathPolicy","Represents the set of capabilities used within a policy."],["Policy","This data structure is used to represent both policies read from Vault and written to Vault. Thus the same Policy read, can then be written back after amending. Vault stores the rules or per path policies in an encoded json blob, so that effectively means json within json, hence the unusual semantics below. { rules: json!{ path: { 'auth/': { capabilities: ['create', 'read', 'update', 'delete', 'list', 'sudo'] }, 'sys/auth/': { capabilities: ['create', 'read', 'update', 'delete', 'sudo'] }, } } } Note: Vault claims rules is deprecated and policy should be used instead, but that doesn't seem to work and makes the reading asymmetrical from the writing."],["PolicyPaths","Represents the policy for a given path."],["ReadKey",""],["ReadResponse","Provides a simple wrapper for all read APIs."]]});