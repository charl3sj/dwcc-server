package in.hasirudala.dwcc.server.framework;

import com.bugsnag.Bugsnag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class BugSnagConfiguration {

    @Autowired
    Environment environment;

    @Bean
    Bugsnag bugsnag() {
        Logger logger = LoggerFactory.getLogger(this.getClass());
        String bugsnagAPIKey = environment.getProperty("dwcc.bugsnag.apiKey");
        String bugsnagReleaseStage = environment.getProperty("dwcc.bugsnag.releaseStage");
        logger.info(String.format("bugsnagReleaseStage: %s", bugsnagReleaseStage));
        Bugsnag bugsnag = new Bugsnag(bugsnagAPIKey, false);
        bugsnag.setReleaseStage(bugsnagReleaseStage);
        bugsnag.setNotifyReleaseStages("prod", "staging", "prerelease", "uat");
        return bugsnag;
    }
}