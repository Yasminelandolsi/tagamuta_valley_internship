package doctor.submit.form.microservice.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.logging.Level;
import java.util.logging.Logger;

@SpringBootApplication
public class DemoApplication {

	private static final Logger logger = Logger.getLogger(DemoApplication.class.getName());

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner checkSchema() {
		return args -> {
			try {
				// Verify if the table exists
				String tableName = "doctorforms";
				boolean tableExists = checkTableExists(tableName);

				if (tableExists) {
					logger.info("Table '" + tableName + "' was created successfully.");
				} else {
					logger.warning("Table '" + tableName + "' does not exist.");
				}
			} catch (Exception e) {
				logger.log(Level.SEVERE, "Error while verifying the schema: ", e);
			}
		};
	}

	private boolean checkTableExists(String tableName) {
		String query = "SELECT COUNT(*) FROM information_schema.tables WHERE table_name = ?";
		Integer count = jdbcTemplate.queryForObject(query, new Object[]{tableName}, Integer.class);
		return count != null && count > 0;
	}
}
